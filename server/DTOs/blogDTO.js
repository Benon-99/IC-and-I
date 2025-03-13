export class BlogDTO {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.content = data.content;
        this.slug = data.slug;
        this.categoryId = data.categoryId;
        this.image = data.image;
        this.published = data.published ?? false;
        this.authorId = data.authorId;
    }

    validate() {
        if (!this.title) throw new Error('Title is required');
        if (!this.content) throw new Error('Content is required');
        if (!this.categoryId) throw new Error('Category is required');
        if (!this.image) throw new Error('Image is required');
        if (!this.authorId) throw new Error('Author is required');
        
        // Validate field lengths based on schema constraints
        if (this.title.length > 150) throw new Error('Title must be less than 150 characters');
        if (this.image.length > 150) throw new Error('Image URL must be less than 150 characters');
    }
}
