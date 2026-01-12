import { DataTypes } from "sequelize";
import db from "../utils/dbUtil";

const TABLE_NAME = "m_ristek_proker"; // Ganti sesuai tabel di atas
const RistekProkerModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nama_proker: { type: DataTypes.STRING, allowNull: false },
    deskripsi: { type: DataTypes.TEXT },
    status: { 
      type: DataTypes.ENUM('belum berjalan', 'sudah selesai', 'sedang berjalan', 'tidak berhasil'),
      allowNull: false 
    },
    tahun: { type: DataTypes.STRING(4) },
  },
  {
    tableName: TABLE_NAME,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

export default RistekProkerModel;