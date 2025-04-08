import { v4 as uuidv4 } from 'uuid';

export class Base {
    id: string | null;
    registerDate: Date | null;
    registerBy: string | null;
    updatedDate: Date | null;
    updatedBy: string | null;
    deletedDate: Date | null;
    deletedBy: string | null;

    constructor() {
        this.id = uuidv4();
        this.registerDate = null;
        this.registerBy = null;
        this.updatedDate = null;
        this.updatedBy = null;
        this.deletedDate = null;
        this.deletedBy = null;
    }
}