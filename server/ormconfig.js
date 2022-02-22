var dbConfig = {
	synchronize: process.env.NODE_ENV === 'development',
	migrations: [ 'migrations/*.js' ],
	cli: {
		migrationsDir: 'migrations'
	}
};

switch (process.env.NODE_ENV) {
	case 'development':
		Object.assign(dbConfig, {
			type: 'sqlite',
			database: 'db.sqlite',
			entities: [ '**/*.entity.js' ]
		});
		break;
	case 'test':
		Object.assign(dbConfig, {
			type: 'sqlite',
			database: 'test.sqlite',
			entities: [ '**/*.entity.ts' ],
			migrationsRun: true
		});
		break;
	case 'production':
		Object.assign(dbConfig, {
			type: 'postgres',
			url: process.env.DATABASE_URL,
			migrationsRun: true,
			entities: [ '**/*.entity.js' ]
		});
		break;
	default:
		throw new Error('unknown environment');
}

module.exports = dbConfig;

// pnpm typeorm migration:generate -- -n initial-schema -o
// pnpm typeorm migration:run
