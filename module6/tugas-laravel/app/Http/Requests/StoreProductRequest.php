<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "string|required",
            "description" => "string",
            "manufacturer_id" => "integer|required",
            "type_id" => "integer|required",
            "base_price" => "integer|required",
            "sell_price" => "integer|required",
            "stock" => "numeric|required"
        ];
    }
}
