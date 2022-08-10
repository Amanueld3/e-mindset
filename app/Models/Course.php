<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use HasFactory, SoftDeletes;

    // protected $table = 'file_path';

    protected $fillable = [
        'title',
        'description',
        'status',
        'user_id',
        'file_path',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'course_users');
    }
    /**
     * The attributes that should be mutated to dates.
     * scratchcode.io
     * @var array
     */

    protected $dates = ['deleted_at'];
}
