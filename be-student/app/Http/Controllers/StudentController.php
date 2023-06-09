<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();

        return response()->json($students);
    }


    private function formatCPF($cpf)
    {
        // format cpf to database pattern XXX.XXX.XXX-XX
        $cpf = substr($cpf, 0, 3) . '.' . substr($cpf, 3, 3) . '.' . substr($cpf, 6, 3) . '-' . substr($cpf, 9, 2);
        return $cpf;
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'cpf' => 'required|unique:students|max:14',
            'AR' => 'required|unique:students|max:4',
            'email' => 'required|email|unique:students|max:255'
        ]);

        // forma o CPF before send to database
        $cpf = $this->formatCPF($validatedData['cpf']);

        $student = new Student;
        $student->name = $validatedData['name'];
        $student->cpf = $cpf;
        $student->AR = $validatedData['AR'];
        $student->email = $validatedData['email'];
        $student->save();

        return response()->json([
            'message' => 'student create success!',
            'student' => $student
        ], 201);
    }


    public function show(Request $request)
    {
        $query = Student::query();

        if ($request->has('cpf')) {
            $cpf = $request->input('cpf');
            if (strlen($cpf) == 11) {
                $cpf = $this->formatCPF($cpf);
            }
            $query->where('cpf', $cpf);
        }

        if ($request->has('AR')) {
            $query->where('AR', $request->input('AR'));
        }

        if ($request->has('name')) {
            $query->where('name', 'like', '%' . $request->input('name') . '%');
        }

        $students = $query->get();

        return response()->json([
            'data' => $students
        ]);
    }


    public function update(Request $request, $AR)
    {
        $student = Student::where('AR', $AR)->firstOrFail();
        if ($request->has('name')) {
            $student->name = $request->input('name');
        }
        if ($request->has('cpf')) {
            $student->cpf = $request->input('cpf');
        }
        if ($request->has('email')) {
            $student->email = $request->input('email');
        }

        $student->save();

        return response()->json(['message' => 'Student update success!', 'data' => $student], 200);
    }


   
    public function destroy($AR)
{
    $student = Student::find($AR);
    if (!$student) {
        return response()->json(['error' => 'Student not found'], 404);
    }

    $student->delete();

    return response()->json(['message' => 'Student delete success!']);
}

}