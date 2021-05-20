var cQuene = function() {
  let stack1 = [];
  let stack2 = [];
}
var cQuene.prototype.appendTail = function(value) {
  this.stack1.push(value)
}

var cQuene.prototype.deleteHead = function() {
  // 检查2中是否为空
  if(!this.stack2.length) {
    if(!this.stack1.length) {
      return -1
    }
    while(this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop()
}


var cQuene = function() {
  let stack1 = []
  let stack2 = []
}

var cQuene.prototype.appendTail = function(val) {
   this.stack1.push(val)
}

var cQuene.prototype.deleteHead = function() {
  if(!this.stack2.length) {
    if(!this.stack1.length) return -1
    while(this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }

  }
  return this.stack2.pop()
}


var cQuene.prototype.deleteHead = function() {
  if(!this.stack2.length) {
    if(!this.stack1.length) {
      return -1
    }
    while(this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }

  }
  return this.stack2.pop()
}