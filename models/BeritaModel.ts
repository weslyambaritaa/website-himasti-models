import { DataTypes } from "sequelize";
import db from "../utils/dbUtil";

const TABLE_NAME = "m_berita";
const BeritaModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    judul: { type: DataTypes.STRING, allowNull: false },
    cover: { type: DataTypes.STRING, allowNull: false },
    deskripsi: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    tableName: TABLE_NAME,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

export default BeritaModel;