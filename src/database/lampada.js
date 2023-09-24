const Lampada = sequelize.define('lampada', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    logradouro: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    numero: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    bairro: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    complemento: {
      type: Sequelize.STRING(512),
      allowNull: true
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    data_registro: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }, {
    tableName: 'lampadas',
    timestamps: false // desabilita as colunas de timestamp padrão do Sequelize
  });
  