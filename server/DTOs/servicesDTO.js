export class ServicesDTO {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.description = data.description;
        this.subContent = data.subContent;
        this.services = data.services;
        this.categoryID = data.categoryID;
    }

    // Validation method
    validate() {
        if (!this.name) throw new Error('Service name is required');
        if (!this.title) throw new Error('Title is required');
        if (!this.description) throw new Error('Description is required');
        if (!this.services || !Array.isArray(this.services)) {
            throw new Error('Services must be a valid array');
        }
        if (!this.categoryID) throw new Error('Category ID is required');
    }
}