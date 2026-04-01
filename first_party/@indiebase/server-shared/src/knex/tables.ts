// The manager tables
export enum M {
  orgs = 'i_orgs',
  projects = 'i_projects',
  roles = 'i_roles',
  grants = 'i_grants',
  users = 'i_users',
  _usersOrgs = '__i_users_orgs',
  _usersProjects = '__i_users_projects',
  _migrations = '__knex_indiebase_migration',
  _seedMigrations = '__knex_indiebase_seed_migration',
  oauthProviders = 'i_oauth_providers',
  oauthUserInfo = 'i_oauth_user_info',
}

// BaaS tables
export enum T {
  users = 'i_users',
  roles = 'i_roles',
  grants = 'i_grants',
  buckets = 'i_buckets',
  oauthProviders = 'i_oauth_providers',
  oauthUserInfo = 'i_oauth_user_info',
}
