export class Doctor {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public specialization: string,
        public email: string,
        public phoneNumber: string
    ) {}
    
    // Method to return the full name of the doctor
    getFullName(): string {
        return `${this.name} ${this.surname}`;
    }
}
