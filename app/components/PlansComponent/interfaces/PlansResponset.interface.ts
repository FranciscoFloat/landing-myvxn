export interface PlansResponse {
    data:    Plans[];
    message: string;
    success: boolean;
}

export interface Plans {
    ID:          number;
    CreatedAt:   Date;
    UpdatedAt:   Date;
    DeletedAt:   null;
    name:        string;
    pricing:     number;
    currency:    string;
    country:     string;
    description: string;
    benefits:    string;
}