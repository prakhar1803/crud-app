<template>
    <div class="home router-container flex">
        <span class="links flex f-column f-jcc">
            <span class="link"
            v-for="(link, index) in links" :key="index"
            :class="{ active : link.isActive}"
            @click="onChange(index)"
            >{{ link.name }}</span>
            <span id="adjust" class="adjust"></span>
        </span>
        <span class="marker flex f-column f-jcc f-aie">
            <span></span>
        </span>
        <span class="contents flex f-aic f-jcc">
            <div class="data-table flex f-column">
                <div class="head-row row">
                    <span v-for="(headRow, index) in headRows" :key="index" class="cell">
                        {{ headRow }}
                    </span>
                </div>
                <div class="row"
                v-for="(row, index) in tableData">
                    <span v-for="(headRow, index) in headRows" :key="index" class="cell">
                        {{ row[headRow] }}
                    </span>
                </div>
            </div>
        </span>
        
    </div>
</template>

<script>
import GetService from '../services/GetService'

export default {
    data() {
        return {
            links: [ 
                        {
                            name: 'Employees',
                            isActive: true,
                            path: 'employee'
                        },
                        {
                            name: 'Clients',
                            isActive: false,
                            path: 'client'
                        },
                        {
                            name: 'Branches',
                            isActive: false,
                            path: 'branch'
                        },
                        {
                            name: 'Suppliers',
                            isActive: false,
                            path: 'supplier'
                        },
                        {
                            name: 'Managers',
                            isActive: false,
                            path: 'supplier'
                        }
            ],
            tableData: [
                {
                    id: 101,
                    name: "Prakhar"
                },
                {
                    id: 102,
                    name: "Mayank"
                }
            ]
        }
    },
    computed: {
        headRows() {
            return Object.keys(this.tableData[0])
        }
    },
    methods: {
        async requestData(path) {
            await GetService.getData(path)
            .then((res) => {
                // console.log(res.data)
                this.tableData = res.data
            })
            .catch((e) => console.log(e))
        },
        onChange(index) {
            for (let i = 0; i < this.links.length; i++) {
                if(i == index) {
                    this.links[i].isActive = true
                } else {
                    this.links[i].isActive = false
                }
            }
            let h = index*(39+37)
            let blank = document.getElementById("adjust")
            blank.style.height = `${h}px`
            this.requestData(this.links[index].path)
        }
    }
};
</script>

<style>
.links {
    background: rgb(233, 253, 234);
    width: 27%;
}
.link {
    margin: 10px 0;
    cursor: pointer;
    transition: .2s;

}
.link:hover {
    text-decoration: underline;
}
.active {
    font-size: 2em;
}
.adjust {
    height: 0px;
}
.marker {
    width: 3%;
    background: rgb(233, 253, 234);
}
.marker span {
    margin-bottom: 150px;
    margin-right: 2px;
    width: 0;
    border: 20px solid transparent;
    border-right-color: black;
}
.contents {
    background: burlywood;
    width: 70%;
}
.data-table {
    min-width: 100px;
    text-align: right;
}
.head-row {
    font-weight: bold;
}
.row {
    height: 30px;
}
.row span {
    width: 100px;
}

</style>
