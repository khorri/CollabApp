angular.module('starter.config', [])
.constant('DB_CONFIG', {
    name: 'collabtp.db',
    tables: [
      {
            name: 'users',
            columns: [
                {name: 'id', type: 'integer primary key',initialized:false},
                {name: 'name', type: 'text',initialized:true},
                {name: 'email', type: 'text',initialized:true},
                {name: 'phone', type: 'integer',initialized:true},
                {name: 'encryptedPassword', type: 'text',initialized:true},
                {name: 'addedAt', type: 'DATETIME DEFAULT CURRENT_TIMESTAMP',initialized:false},
                {name: 'updatedAt', type: 'DATETIME DEFAULT CURRENT_TIMESTAMP',initialized:false}
            ],
          values:["'Demo Demo'","'demo@demo.com'","''","'az'"]
        }
    ]
});