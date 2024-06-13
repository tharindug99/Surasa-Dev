<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';
    protected $fillable = ['user_id', 'item_name', 'quantity', 'price'];

    /**
     * Define the relationship with the User model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Scope a query to include orders for a specific user.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param int $userId
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeForUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }

    /**
     * Get total quantity of items ordered for a specific user.
     *
     * @param int $userId
     * @return int
     */
    public static function getTotalQuantityForUser($userId)
    {
        return self::where('user_id', $userId)->sum('quantity');
    }

    /**
     * Get total price of orders for a specific user.
     *
     * @param int $userId
     * @return float
     */
    public static function getTotalPriceForUser($userId)
    {
        return self::where('user_id', $userId)->sum('price');
    }
}
