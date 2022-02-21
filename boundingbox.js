class BoundingBox {
    constructor(x, y, width, height) {
        Object.assign(this, { x, y, width, height });

        this.left = x;
        this.top = y;
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
    };

    exteriorcollide(oth) {
        if (this.right > oth.left && this.left < oth.right && this.top < oth.bottom && this.bottom > oth.top) return true;
        return false;
    };

    interiorcollide(oth) {
        if (this.right > oth.right || this.left < oth.left || this.top < oth.top || this.bottom > oth.bottom) return true;
        return false;
    };

    draw(ctx, color) {
        ctx.strokeStyle = color;
        ctx.strokeRect(this.left, this.top, this.right - this.left, this.bottom - this.top);
    };
};