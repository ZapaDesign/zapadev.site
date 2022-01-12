<template>
    <div class="calendar__wrap">
        <div class="zdgrid zdgrid--x">
            <div class="zdcell lg-6">
                <table class="table">
                    <thead>
                    <tr>
                        <td>
                            <button v-on:click="decrease"><</button>
                        </td>
                        <td colspan="5"> {{ monthes[month] }} {{ year }}</td>
                        <td>
                            <button v-on:click="increase">></button>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="d in day">{{ d }}</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="week in calendar()">
                        <td v-for="(day, index) in week">
                            <div
                                @click="toggleDayStatus"
                                class="cal__day"
                                :class="{'selected' : day.markedDay}"
                            >
                                {{ day.index }}
                                {{day.markedDay}}
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="zdcell lg-6">
                <p @click="log">Console.log</p>
                <div>
                    <span>Day Payment:</span>
                    <span><strong>{{ dayPayment }}</strong></span>
                </div>
                <div>
                    <button @click="isShow = !isShow">Change Day Payment</button>
                    <input
                        v-show="isShow"
                        v-model.lazy.number="dayPayment"
                        type="text">
                </div>
                <div>
                    <span>Total amount for <strong>{{ markedDays }}</strong> days:</span>
                    <span><strong>{{ dayPayment * markedDays }}</strong></span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "ZapadevCalendar",

    data() {
        return {
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            dFirstMonth: '1',
            day: ["Mn", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            monthes: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            date: new Date(),

            isShow: false,
            selectDayStatus: false,
            dayStatus: false,

            markedDays: 0,
            dayPayment: Math.round(68 * 2 / 3),
        }
    },

    methods: {
        log: function () {
            console.log(this.day);
        },

        calendar: function () {
            let days = [];
            let week = 0;
            let a = 0;
            days[week] = [];
            let dlast = new Date(this.year, this.month + 1, 0).getDate();
            for (let i = 1; i <= dlast; i++) {
                if (new Date(this.year, this.month, i).getDay() != this.dFirstMonth) {
                    a = {index: i, markedDay: false};
                    days[week].push(a);
                } else {
                    week++;
                    days[week] = [];
                    a = {index: i};
                    days[week].push(a);
                }
            }
            if (days[0].length > 0) {
                for (let i = days[0].length; i < 7; i++) {
                    days[0].unshift('');
                }
            }
            this.dayChange;
            return days;
        },

        decrease: function () {
            this.month--;
            if (this.month < 0) {
                this.month = 12;
                this.month--;
                this.year--;
            }
        },
        increase: function () {
            this.month++;
            if (this.month > 11) {
                this.month = -1;
                this.month++;
                this.year++;
            }
        },

        toggleDayStatus: function () {

            this.day.markedDay = true;
            return this.day.markedDay;
            // this.markedDays++;
            // console.log(this.day.markedDay);
        }

    }


}
</script>

<style lang="scss" scoped>
table td {
    padding: 0;
}

.cal {
    &__day {
        padding: 20px;
        &.selected {
            background-color: var(--accent-color);
            //color: var(--accent-color);
        }
    }
}
</style>
