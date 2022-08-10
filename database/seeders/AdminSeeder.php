<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'firstName' => "Amanuel",
            'lastName' => "Desalegn",
            'phone' => "963732919",
            'email' => "amandesalegnb@gmail.com",
            'email_verified_at' => now(),
            'role' => "Admin",
            'password' => Hash::make("password"), // password
            'remember_token' => Str::random(10),
        ]);
    }
}
