module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('user_tag', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'user_tag_foreign_from_users',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('user_tag', {
      fields: ['tag_id'],
      type: 'foreign key',
      name: 'user_tag_foreign_from_tags',
      references: {
        table: 'tags',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('user_department', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'user_department_foreign_from_users',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('user_department', {
      fields: ['department_id'],
      type: 'foreign key',
      name: 'user_department_foreign_from_departments',
      references: {
        table: 'departments',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('tag_company', {
      fields: ['tag_id'],
      type: 'foreign key',
      name: 'tag_company_foreign_from_tags',
      references: {
        table: 'tags',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('tag_company', {
      fields: ['company_id'],
      type: 'foreign key',
      name: 'tag_company_foreign_from_companies',
      references: {
        table: 'companies',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('departments', {
      fields: ['company_id'],
      type: 'foreign key',
      name: 'departments_foreign_from_companies',
      references: {
        table: 'companies',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('CS_numbers', {
      fields: ['department_id'],
      type: 'foreign key',
      name: 'CS_numbers_foreign_from_departments',
      references: {
        table: 'departments',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('guides', {
      fields: ['CS_number_id'],
      type: 'foreign key',
      name: 'guides_foreign_from_CS_numbers',
      references: {
        table: 'CS_numbers',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('services', {
      fields: ['department_id'],
      type: 'foreign key',
      name: 'services_foreign_from_departments',
      references: {
        table: 'departments',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('user_tag', 'user_tag_foreign_from_users');
    await queryInterface.removeConstraint('user_tag', 'user_tag_foreign_from_tags');
    await queryInterface.removeConstraint('user_department', 'user_department_foreign_from_users');
    await queryInterface.removeConstraint('user_department', 'user_department_foreign_from_departments');
    await queryInterface.removeConstraint('tag_company', 'tag_company_foreign_from_tags');
    await queryInterface.removeConstraint('tag_company', 'tag_company_foreign_from_companies');
    await queryInterface.removeConstraint('departments', 'departments_foreign_from_companies');
    await queryInterface.removeConstraint('CS_numbers', 'CS_numbers_foreign_from_departments');
    await queryInterface.removeConstraint('guides', 'guides_foreign_from_CS_numbers');
    await queryInterface.removeConstraint('services', 'services_foreign_from_departments');
  },
};
