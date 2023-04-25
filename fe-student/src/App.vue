<template>
  <v-app>
    <v-app-bar app color="indigo darken-2" dark>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>Menu</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item @click="selectPage('Students')">
          <v-list-item-title>Alunos</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-card v-if="selectedPage === 'Students'">
          <v-card-title>Pesquisar Alunos
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="AddStudentDialog">Adicionar Aluno</v-btn>
          </v-card-title>

          <v-card-text>
            <v-text-field v-model="searchText" @input="clearedSearchInput" label="Pesquise por RA, CPF ou nome do aluno"
              outlined></v-text-field>
            <v-btn @click="show" color="primary">Pesquisar</v-btn>
          </v-card-text>

          <v-data-table dense v-if="Students.length > 0" :headers="headers" :items="Students">
            <template v-slot:item="{ item }">
              <tr>
                <td><v-text-field v-model="item.AR" solo dense flat readonly></v-text-field></td>
                <td><v-text-field v-model="item.name" solo dense flat readonly></v-text-field></td>
                <td><v-text-field v-model="item.cpf" solo dense flat readonly></v-text-field></td>
                <td><v-text-field v-model="item.email" solo dense flat readonly></v-text-field></td>

                <td>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item @click="selectEditStudent(item)">
                        <v-list-item-icon>
                          <v-icon>mdi-pencil</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Editar</v-list-item-title>
                      </v-list-item>

                      <v-list-item @click="deleteStudent(item.AR)">
                        <v-list-item-icon>
                          <v-icon>mdi-delete</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Excluir</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </td>
              </tr>
            </template>
          </v-data-table>



          <v-alert v-else :value="true" color="warning" icon="mdi-alert-circle-outline">
            Nenhum resultado encontrado.
          </v-alert>

          <v-dialog v-model="addStudentDialog" max-width="500px">
            <v-card>
              <v-card-title>
                Adicionar Aluno
              </v-card-title>
              <v-card-text>
                <v-form ref="form">
                  <v-text-field v-model="AR" label="RA * " outlined :rules="[requiredRule]" required></v-text-field>
                  <v-text-field v-model="name" label="Nome * " outlined :rules="[requiredRule]" required></v-text-field>
                  <v-text-field v-model="cpf" label="CPF * " outlined :rules="[requiredRule]" required></v-text-field>
                  <v-text-field v-model="email" label="Email * " outlined :rules="[requiredRule, emailRule]"
                    required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" :disabled="!formIsValid" @click="addStudent">Salvar</v-btn>
                <v-btn @click="cancelAddStudent">Cancelar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="editStudentDialog" max-width="600px">
            <v-card>
              <v-card-title>
                Editar Aluno
              </v-card-title>
              <v-card-text>
                <v-form ref="editStudentForm">
                  <v-text-field v-model="selectedStudent.name" :rules="[requiredRule]" label="Nome"
                    outlined></v-text-field>
                  <v-text-field v-model="selectedStudent.email" :rules="[requiredRule, emailRule]" label="E-mail"
                    outlined></v-text-field>
                  <v-text-field v-model="selectedStudent.AR" readonly label="RA" outlined></v-text-field>
                  <v-text-field v-model="selectedStudent.cpf" readonly label="CPF" outlined></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" :disabled="!formEditIsValid" @click="saveStudentEdit">Salvar</v-btn>
                <v-btn @click="cancelStudentEdit">Cancelar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">  tbody {
    tr:hover {
      background-color: transparent !important;
    }
  }

  .container {
    margin-left: 10px;
  }
</style>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      drawer: true,
      selectedPage: 'Students',
      searchText: '',
      Students: [],
      headers: [
        { text: 'Registro Academico', value: 'AR' },
        { text: 'name', value: 'name' },
        { text: 'CPF', value: 'cpf' },
        { text: 'EMAIL', value: 'email' },
      ],
      AR: '',
      name: '',
      cpf: '',
      email: '',

      addStudentDialog: false,
      editStudentDialog: false,

      selectedStudent: {},
      studentEditing: {},
      student: {},

      showAlert: false,
      alertMessage: "",
      requiredRule: (value) => !!value || "Campo obrigatório.",
      emailRule: (value) => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(value) || "E-mail inválido.";
      }
    };
  },
  computed: {
    formIsValid() {
      return (
        !!this.AR &&
        !!this.name &&
        !!this.cpf &&
        !!this.email &&
        this.emailRule(this.email) === true
      );
    },

    formEditIsValid() {
      return (
        !!this.selectedStudent.name &&
        !!this.selectedStudent.email &&
        this.emailRule(this.selectedStudent.email) === true
      );
    }
  },

  created() {
    this.selectedPage = 'Students';
    this.getStudents();

  },

  methods: {
    //student list
    getStudents() {
      axios.get('http://3.17.36.9:8000/api/students')
        .then(response => {
          this.Students = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    //single search
    show() {
      let params = {};

      if (this.searchText) {
        if (/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(this.searchText)) {
          // CPF XXX.XXX.XXX-XX
          params.cpf = this.searchText;
        } else if (/^\d{11}$/.test(this.searchText)) {
          // CPF XXXXXXXXXXX
          params.cpf = this.searchText.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
        } else if (/^\d{3,4}$/.test(this.searchText)) {
          // AR
          params.AR = this.searchText;
        } else {
          // name
          params.name = this.searchText;
        }
      } else {
        // search button when empty searchtext 
        this.getStudents();
        return;
      }
      axios.get("http://3.17.36.9:8000/api/students/show", { params: params })
        .then((response) => {
          this.Students = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },


    //adding student
    addStudent() {
      const formData = {
        AR: this.AR,
        name: this.name,
        cpf: this.cpf,
        email: this.email
      };
      axios.post('http://3.17.36.9:8000/api/students/store', formData)
        .then(response => {
          console.log(response.data);
          this.addStudentDialog = false;
          this.$refs.form.reset();
          this.$emit('added-student', response.data.data);
          this.getStudents();
          alert("Aluno adicionado com sucesso!");


        })
        .catch(error => {
            console.error(error);
            if (error.response.status === 422) {
              alert(`O aluno já existe.`);
            } else {
              alert(`Ocorreu um erro ao criar aluno.`);
            }
          });

    },
    //open add dialog
    AddStudentDialog() {
      this.addStudentDialog = true;
    },
    //cancel student add and clear form
    cancelAddStudent() {
      this.AR = "";
      this.name = "";
      this.cpf = "";
      this.email = "";
      this.showAlert = false;
      this.alertMessage = "";
      this.addStudentDialog = false;
    },


    selectEditStudent(student) {
      this.studentBeforeEdit = {
        AR: student.AR,
        name: student.name,
        cpf: student.cpf,
        email: student.email
      };
      this.selectedStudent = student;
      this.editStudentDialog = true;
    },

    saveStudentEdit() {
      const formData = new FormData();
      const mainStudent = { ...this.selectedStudent };
      const editedStudent = {};
      const editData = {};

      // copy student info into studentEditing
      this.studentEditing = { ...this.selectedStudent };

      // save and compare the old and new information about the student, if there is any difference,
      // save the newest information into a variable editedStudent
      for (const propriedade in this.studentEditing) {
        if (this.studentEditing[propriedade] !== this.studentBeforeEdit[propriedade]) {
          formData.append(propriedade, this.studentEditing[propriedade]);
          editedStudent[propriedade] = this.studentEditing[propriedade];
          editData[propriedade] = `${propriedade}: ${this.studentEditing[propriedade]}`;
        }
      }

      // check editedStudent looking for the changes
      const editTrue = Object.keys(editedStudent).length > 0;

      // if there are changes, make put requisition
      if (editTrue) {
        axios.put(`http://3.17.36.9:8000/api/students/${mainStudent.AR}`, editedStudent)
          .then(response => {
            console.log(response.data);
            console.log(`Before Edit: ${JSON.stringify(mainStudent)}`);
            console.log(`After Edit: ${JSON.stringify(this.studentEditing)}`);
            console.log(`Changes: ${JSON.stringify(editData)}`);
            this.editStudentDialog = false;
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        console.log('No changes made.');
        this.editStudentDialog = false;
      }
    },

    //make it reload student information and close form 
    cancelStudentEdit() {
      if (this.selectedStudent) {
        this.selectedStudent.AR = this.studentBeforeEdit.AR;
        this.selectedStudent.name = this.studentBeforeEdit.name;
        this.selectedStudent.cpf = this.studentBeforeEdit.cpf;
        this.selectedStudent.email = this.studentBeforeEdit.email;
      }
      this.editStudentDialog = false;
      this.studentEditing = null;
      this.studentBeforeEdit = null;
    },

    deleteStudent(AR) {
      const confirmar = confirm(`Tem certeza que deseja excluir o aluno de AR ${AR}?`);
      if (confirmar) {
        axios.delete(`http://3.17.36.9:8000/api/students/${AR}`)
          .then(response => {
            console.log(response.data);
            const index = this.Students.findIndex(student => student.AR === AR);
            if (index !== -1) {
              this.Students.splice(index, 1);
            }
          })
          .catch(error => {
            console.error(error);
            if (error.response.status === 404) {
              alert(`O aluno de AR ${AR} não foi encontrado na base de dados.`);
            } else {
              alert(`Ocorreu um erro ao excluir o aluno de AR ${AR}.`);
            }
          });
      }
    },

    //check if search input has any text, if empty reload student list
    clearedSearchInput() {
      if (this.searchText === '') {
        this.getStudents();
      }
    },
  }
}
</script>