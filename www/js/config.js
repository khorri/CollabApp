angular.module('starter.config', [])
.constant('DB_CONFIG', {
    name: 'collabtp.db',
    tables: [
      {
            name: 'users',
            columns: [
                {name: 'id', type: 'text',initialized:false},
                {name: 'name', type: 'text',initialized:true},
                {name: 'email', type: 'text',initialized:true},
                {name: 'phone', type: 'integer',initialized:true},
                {name: 'encryptedPassword', type: 'text',initialized:true},
                {name: 'lastSynch', type: 'DATETIME DEFAULT',initialized:false},
                {name: 'addedAt', type: 'DATETIME DEFAULT CURRENT_TIMESTAMP',initialized:false},
                {name: 'updatedAt', type: 'DATETIME DEFAULT CURRENT_TIMESTAMP',initialized:false}
            ],
          values:["'Super Admin'","'admin@admin.com'","''","'12345'"]
        },{
        name:'project',
        columns:[
          {name: 'id', type: 'text',initialized:false},
          {name: 'ref', type: 'text',initialized:false},
          {name: 'name', type: 'text',initialized:false},
          {name: 'desc', type: 'text',initialized:false},
          {name: 'status', type: 'text',initialized:false},
          {name: 'city', type: 'text',initialized:false},
          {name: 'address', type: 'text',initialized:false},
          {name: 'starts', type: 'DATETIME',initialized:false},
          {name: 'ends', type: 'DATETIME',initialized:false},
          {name: 'duration', type: 'REAL DEFAULT 0.0',initialized:false},
          {name: 'isDeleted', type: 'integer',initialized:false},
          {name: 'addedAt', type: 'DATETIME DEFAULT CURRENT_TIMESTAMP',initialized:false},
          {name: 'updatedAt', type: 'DATETIME DEFAULT CURRENT_TIMESTAMP',initialized:false},
          {name: 'idCustomer', type: 'integer',initialized:false},
        ]
      },{
        name:'user_project',
        columns:[
          {name: 'idUser', type: 'text',initialized:false},
          {name: 'idProject', type: 'text',initialized:true},
          {name: 'isLeader', type: 'integer',initialized:true}
        ]
      },{
        name:'participant',
        columns:[
          {name: 'id', type: 'text',initialized:false},
          {name: 'contactPerson', type: 'text',initialized:false},
          {name: 'company', type: 'text',initialized:false},
          {name: 'description', type: 'text',initialized:false},
          {name: 'email', type: 'text',initialized:false},
          {name: 'phone', type: 'text',initialized:false},
          {name: 'cellphone', type: 'text',initialized:false},
          {name: 'url', type: 'text',initialized:false},
          {name: 'address', type: 'text',initialized:false},
          {name: 'zip', type: 'text',initialized:false},
          {name: 'city', type: 'text',initialized:false},
          {name: 'country', type: 'text',initialized:false},
          {name: 'state', type: 'text',initialized:false},
          {name: 'isDeleted', type: 'integer',initialized:false},
          {name: 'addedAt', type: 'DATETIME DEFAULT CURRENT_TIMESTAMP',initialized:false},
          {name: 'updatedAt', type: 'DATETIME DEFAULT CURRENT_TIMESTAMP',initialized:false},
          {name: 'idType', type: 'integer',initialized:false}
        ]
      },{
        name:'customer',
        columns:[
          {name: 'id', type: 'text',initialized:false},
          {name: 'contactPerson', type: 'text',initialized:false},
          {name: 'company', type: 'text',initialized:false},
          {name: 'description', type: 'text',initialized:false},
          {name: 'email', type: 'text',initialized:false},
          {name: 'phone', type: 'text',initialized:false},
          {name: 'cellphone', type: 'text',initialized:false},
          {name: 'url', type: 'text',initialized:false},
          {name: 'address', type: 'text',initialized:false},
          {name: 'zip', type: 'text',initialized:false},
          {name: 'city', type: 'text',initialized:false},
          {name: 'country', type: 'text',initialized:false},
          {name: 'state', type: 'text',initialized:false},
          {name: 'isDeleted', type: 'integer',initialized:false},
          {name: 'addedAt', type: 'DATETIME DEFAULT CURRENT_TIMESTAMP',initialized:false},
          {name: 'updatedAt', type: 'DATETIME DEFAULT CURRENT_TIMESTAMP',initialized:false},
          {name: 'idType', type: 'text',initialized:false}
        ]
      },{
        name:'project_participant',
        columns:[
          {name: 'idProject', type: 'text',initialized:false},
          {name: 'idParticipant', type: 'text',initialized:false}
        ]
      },{
        name:'type',
        columns:[
          {name: 'id', type: 'text',initialized:false},
          {name: 'name', type: 'text',initialized:false},
          {name: 'description', type: 'text',initialized:false},
          {name: 'addedAt', type: 'DATETIME DEFAULT CURRENT_TIMESTAMP',initialized:false},
          {name: 'updatedAt', type: 'DATETIME DEFAULT CURRENT_TIMESTAMP',initialized:false}
        ]
      }
    ]
});
