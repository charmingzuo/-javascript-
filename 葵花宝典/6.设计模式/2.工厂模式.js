class Factory {
    static createInstance(type) {
        switch (type) {
            case 'tesla':
                return new Tesla()
            case 'byd':
                return new BYD()
        }
        throw new Error('invalid arg "type"')
    }
}

class Car {
    constructor(name) {
        this.name = name
    }

    echo() {
        console.log(this.name)
    }
}

class Tesla extends Car {
    constructor() {
        super('Tesla')
    }
}

class BYD extends Car {
    constructor() {
        super('BYD')
    }
}

module.exports = {
    Factory, Car, Tesla, BYD
}