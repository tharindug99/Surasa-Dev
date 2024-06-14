<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingRequests extends Model
{
    protected $fillable = [
        'fullName',
        'contactNumber',
        'email',
        'faculty',
        'startingTime',
        'endTime'
    ];
}
