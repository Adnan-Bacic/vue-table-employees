new Vue({
    el: '#main',
    data: {
        heading: 'Employees',
        copyright: '@Adnan Bacic',

        sortBy: 'firstName',

        employees: [
            {
            "firstName": "amelia",
            "lastName": "austin",
            "photoUrl": "https://randomuser.me/api/portraits/thumb/women/9.jpg",
            "email": "amelia.austin@example.com",
            "phone": "(651)-507-3705",
            "department": "Engineering"
            },
            {
            "firstName": "bobbie",
            "lastName": "murphy",
            "photoUrl": "https://randomuser.me/api/portraits/thumb/women/79.jpg",
            "email": "bobbie.murphy@example.com",
            "phone": "(925)-667-7604",
            "department": "Management"
            },
            {
            "firstName": "kristin",
            "lastName": "terry",
            "photoUrl": "https://randomuser.me/api/portraits/thumb/women/45.jpg",
            "email": "kristin.terry@example.com",
            "phone": "(021)-544-1184",
            "department": "Sales"
            },
            {
            "firstName": "brandon",
            "lastName": "griffin",
            "photoUrl": "https://randomuser.me/api/portraits/thumb/men/59.jpg",
            "email": "brandon.griffin@example.com",
            "phone": "(509)-317-9506",
            "department": "Management"
            },
            {
            "firstName": "tammy",
            "lastName": "gibson",
            "photoUrl": "https://randomuser.me/api/portraits/thumb/women/72.jpg",
            "email": "tammy.gibson@example.com",
            "phone": "(815)-727-0663",
            "department": "Support"
            },
            ],

            
    },
    computed: {
        sortedEmployees(){
            //sorts employees
            return this.employees.sort((a,b) => a[this.sortBy].localeCompare(b[this.sortBy]));
        }
    },

    created(){
        let randomNumbers = [1,3,2];
        //console.log(randomNumbers.sort());

        const sortedNumbers = randomNumbers.sort((a,b) => {
            return a-b //sorts from small to large
        })
        console.log(sortedNumbers)

        const sortedNumbers2 = randomNumbers.sort((a,b) => {
            return b-a //sorts from large to small
        })
        console.log(sortedNumbers2)
        
    }
});