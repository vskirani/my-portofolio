// ============================================
// RESPONSE TYPES
// ============================================

export type ValidationError = {
    field: string;
    message: string;
};

export type SuccessResponse<T> = {
    success: true;
    message: string;
    data: T;
};

export type ErrorResponse = {
    success: false;
    message: string;
    errors?: ValidationError[];
};
