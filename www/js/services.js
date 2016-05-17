angular.module('starter.services', ['ngCordova', 'starter.config'])
    .factory('DB', function ($cordovaSQLite, DB_CONFIG) {
        var self = this;
        self.db = null;
        self.init = function () {
            self.db = $cordovaSQLite.openDB({
                name: DB_CONFIG.name,
                bgType: 1,
                iosDatabaseLocation: 'default'
            });
            angular.forEach(DB_CONFIG.tables, function (table) {
                var columns = [];
                var initializedColumns = [];
                angular.forEach(table.columns, function (column) {
                    columns.push(column.name + ' ' + column.type);
                    if (column.initialized)
                        initializedColumns.push(column.name);
                });

                var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
                self.query(query);
                console.log('Table ' + table.name + ' initialized');
                query = "INSERT INTO " + table.name + "(" + initializedColumns.join(',') + ") VALUES (" + table.values.join(',') + ")";
                self.query(query).then(function (res) {
                    console.log('initialized values inserted in the table: ' + table.name);
                }, function (err) {
                    console.log(query);
                    console.error("Could not initialize the table: " + table.name + ". ERROR" + err);
                });

            });
        };

        self.query = function (query, values) {
            values = typeof values !== 'undefined' ? values : [];
            return $cordovaSQLite.execute(self.db, query, values);
        };
        self.fetchAll = function (result) {
            var output = [];

            for (var i = 0; i < result.rows.length; i++) {
                output.push(result.rows.item(i));
            }

            return output;
        };

        self.fetch = function (result) {
            return result.rows.item(0);
        };
        return self;
    })
    .factory('User', function (DB) {
        var self = this;

        self.all = function () {
            return DB.query('SELECT * FROM users')
                .then(function (result) {
                    return DB.fetchAll(result);
                });
        };

        self.getById = function (id) {
            return DB.query('SELECT * FROM users WHERE id = ?', [id])
                .then(function (result) {
                    return DB.fetch(result);
                });
        };

        return self;
    })
    .factory('Chats', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'img/ben.png'
  }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/max.png'
  }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'img/adam.jpg'
  }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'img/perry.png'
  }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'img/mike.png'
  }];

        return {
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        };
    });