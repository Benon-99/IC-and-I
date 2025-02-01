export class ServiceDTO {
  constructor({
    id,
    title,
    description,
    servicelink,
    overviewtitle,
    overviewcontent,
    features,
    categoryId,
    status,
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.servicelink = servicelink;
    this.overviewtitle = overviewtitle;
    this.overviewcontent = overviewcontent;
    this.features = features;
    this.categoryId = categoryId;
    this.status = status;
  }
}
