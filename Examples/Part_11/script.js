let user = [
    ["phoenix420",          // [0][0]
        24,                 // [0][1]
        "ash@phoenix.com",  // [0][2]
        false               // [0][3]
    ],
    ["Ced_Lord",             // [1][0]
        11,                 // [1][1]
        "cedric@lord.com",  // [1][2]
        false               // [1][3]
    ],
    ["granny",              // [2][0]
        67,                 // [2][1]
        "granny@lord.com",  // [2][2]
        true                // [2][3]
    ]
];

console.log(user[1][0]);    // Output: lord777
console.log(user[1][1]);    // Output: 12
console.log(user[1][2]);    // Output: cedric@lord.com
console.log(user[1][3] ? "Admin" : "User"); // Output: User


