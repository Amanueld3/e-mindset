<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // dd($request->search);
        return Inertia::render('Admin/courses/Courses', [
            'courses' => Course::query()
                ->when($request->search, function ($query, $search) {
                    $query->where('title', 'like', "%{$search}%");
                })
                ->select('id', 'title', 'description', 'file_path', 'status')
                ->paginate(10),
            'filters' => $request->only(['search']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/courses/AddCourse');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request);
        $validator = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'courseCover' => 'mimes:mpeg,ogg,mp4,webm,3gp,mov,flv,avi,wmv,ts,mkv|max:100040|required',
        ]);


        if ($request->file('courseCover')) {
            $file = $request->file('courseCover');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('uploads', $fileName, 'public');
            $finalpath = '/storage/' . $filePath;
        }

        $loginuser = Auth::user();

        $Course = Course::create([
            'title' => $request->title,
            'description' => $request->description,
            'user_id' => $loginuser->id,
            'file_path' => $finalpath,
        ]);

        if ($Course) {
            session()->flash('message', 'Course created successfully. ');
        } else {
            session()->flash('error', ' Course not created');
        }

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
