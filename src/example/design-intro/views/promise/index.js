const Pending = Symbol('Pending')
const Fulfilled = Symbol('Fulfilled')
const Reject = Symbol('Reject')

class Promise {
    constructor(executor) {
        this.status = Pending
        this.value = null
        this.FulfilledCallback = []
        this.RejectCallback = []
        const resolve = value => {
            if (this.status === Pending) {
                this.status = Fulfilled
                this.value = value
                this.FulfilledCallback.forEach(callback => {
                    callback(value)
                })
            }
        }
        const reject = value => {
            if (this.status === Pending) {
                this.status = Reject
                this.value = value
                this.RejectCallback.forEach(callback => {
                    callback(value)
                })
            }
        }
        executor(resolve, reject)
    }

    then(fn) {
        if (this.status === Fulfilled || this.status === Reject) {
            if (fn && typeof fn === 'function') {
                fn(this.value)
            }
        }
        if (this.status === Pending) {
            this.FulfilledCallback.push(fn)
        }
    }
}

const test = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('pass')
    }, 1000)
})

test.then(res => {
    console.log(123)
})
