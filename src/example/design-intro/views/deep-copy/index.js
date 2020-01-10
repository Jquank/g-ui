const deepCopy = (target, map = new WeakMap()) => {
    if (map.get(target)) {
        return
    }
    if (typeof target === 'function') {
        if (!target.prototype) {
            return target
        } else {
            const bodyReg = /(?<={)(.|\n)+(?=})/m
            const paramReg = /(?<=\().+(?=\)\s+{)/
            const funcString = target.toString()
            const param = paramReg.exec(funcString)
            const body = bodyReg.exec(funcString)
            if (!body) return null
            if (param) {
                const paramArr = param[0].split(',')
                // eslint-disable-next-line no-new-func
                return new Function(...paramArr, body[0])
            } else {
                // eslint-disable-next-line no-new-func
                return new Function(body[0])
            }
        }
    } else if (typeof target !== 'object' || target === null) {
        map.set(target, true)
        const cloneTarget = Array.isArray(target) ? [] : {}
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                cloneTarget[prop] = deepCopy(target[prop], map)
            }
        }
        return cloneTarget
    } else {
        return target
    }
}
export default deepCopy
