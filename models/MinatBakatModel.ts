import { DataTypes } from "sequelize";
import db from "../utils/dbUtil";

const TABLE_NAME = "m_minat_bakat"; // Ganti sesuai tabel di atas
const MinatBakatModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    urutan: { type: DataTypes.INTEGER, autoIncrement: true },
    gambar_orang: { type: DataTypes.STRING, allowNull: false },
    nama: { type: DataTypes.STRING, allowNull: false },
    jabatan: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: TABLE_NAME,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

export default MinatBakatModel;