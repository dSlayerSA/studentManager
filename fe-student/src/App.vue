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
                <td><v-text-field v-model="item.RA" solo dense flat readonly></v-text-field></td>
                <td><v-text-field v-model="item.nome" solo dense flat readonly></v-text-field></td>
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

                      <v-list-item @click="deleteStudent(item.RA)">
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
                  <v-text-field v-model="RA" label="RA * " outlined :rules="[requiredRule]" required></v-text-field>
                  <v-text-field v-model="nome" label="Nome * " outlined :rules="[requiredRule]" required></v-text-field>
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
                  <v-text-field v-model="selectedStudent.nome" :rules="[requiredRule]" label="Nome"
                    outlined></v-text-field>
                  <v-text-field v-model="selectedStudent.email" :rules="[requiredRule, emailRule]" label="E-mail"
                    outlined></v-text-field>
                  <v-text-field v-model="selectedStudent.RA" readonly label="RA" outlined></v-text-field>
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