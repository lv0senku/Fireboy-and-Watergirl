/**
 * @author rrcat920
 * See {@link Rect}
 */
class Person extends Rect {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.moveRight = false;
    this.moveLeft = false;
    this.jump = false;
    this.xspeed = 5;
    this.yspeed = 1;
  }

  /**
   * 更新Person对象的数据
   */
  update() {
    if (!this.onGround()) {
      this.y -= this.yspeed;
      if (this.y > settings.displayHeight) {
        this.y = settings.displayHeight;
      }
    }
    if (this.moveRight) {
      this.x += this.xspeed;
      // TODO: 更新到基础的碰撞检测
      if (this.x + this.width > settings.width) {
        this.x = settings.displayWidth - this.width;
      }
    }
    if (this.moveLeft) {
      this.x -= this.xspeed;
      if (this.x < 0) {
        this.x = 0;
      }
    }
    if (this.jump && this.onGround()) {
      this.y += this.yspeed;
    }
  }

  /**
   * TODO: 检测地图
   * @param {Array<number>} map
   */
  onGround(map) {
    return this.y >= settings.displayHeight;
  }

  /**
   * 绘画
   * @param {Object} ctx 画布
   */
  draw(ctx) {}
}
