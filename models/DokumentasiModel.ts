import { DataTypes } from "sequelize";
import db from "../utils/dbUtil";

const TABLE_NAME = "m_dokumentasi";
const DokumentasiModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    judul: { type: DataTypes.STRING, allowNull: false },
    waktu: { type: DataTypes.DATE, allowNull: false },
    gambar1: { type: DataTypes.STRING },
    gambar2: { type: DataTypes.STRING },
    gambar3: { type: DataTypes.STRING },
    gambar4: { type: DataTypes.STRING },
    gambar5: { type: DataTypes.STRING },
  },
  {
    tableName: TABLE_NAME,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

export default DokumentasiModel;