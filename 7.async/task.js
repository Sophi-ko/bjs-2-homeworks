class AlarmClock {
    constructor(alarmCollection, intervalId) {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(time && callback) {
            if(this.alarmCollection.length > 0) {
                for(let i = 0; i < this.alarmCollection.length; i++) {
                    if(this.alarmCollection[i].time === time) {
                        console.warn('Уже присутствует звонок на это же время');
                    }
                }
            }
            
            this.alarmCollection.push({
                callback: callback,
                time: time,
                canCall: true
            })
        } else {
            throw new Error('Отсутствуют обязательные аргументы');
        }
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        let date = new Date;
        return (date.getHours() + ':' + date.getMinutes());
    }

    start() {
        if(this.intervalId) {
        } else {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((alarm) => {
                    if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
                        alarm.canCall = false;
                        alarm.callback();
                    }
                })
            }, 1000);
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}