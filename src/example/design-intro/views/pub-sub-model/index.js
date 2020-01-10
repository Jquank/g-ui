class EventEmit {
    constructor() {
        this.listners = {}
    }
    on(type, cb) {
        if (typeof cb !== 'function') {
            throw new Error('the second arguments must be a function')
        }
        if (!this.listners[type]) {
            this.listners[type] = []
        }
        this.listners[type].push(cb)
    }
    emit(type, ...args) {
        let arr = this.listners[type]
        if (arr) {
            arr.forEach(cb => {
                cb.apply(this, args)
            })
        }
    }
    off(type, cb) {
        if (!type) {
            this.listners = {}
        } else if (!cb) {
            this.listners[type] = []
        } else {
            if (this.listners[type].length) {
                let index = this.listners[type].findIndex(val => val === cb)
                if (index > -1) {
                    this.listners[type].splice(index, 1)
                }
            }
        }
    }
}
export default EventEmit
