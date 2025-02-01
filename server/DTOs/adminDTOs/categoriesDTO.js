export class CategoriesDTO {
    constructor(data) {
        this.id = data.id;
        this.category = data.category;
        this.title = data.title;
        this.mainDescription = data.mainDescription;
        this.overviewTitle = data.overviewTitle;
        this.overviewContent = data.overviewContent;
        this.offeringsTitle = data.offeringsTitle;
        this.offeringsContent = data.offeringsContent;
        this.services = data.services;
        this.status = data.status;
    }
}