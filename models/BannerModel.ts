import { DataTypes } from "sequelize";
import db from "../utils/dbUtil";

const TABLE_NAME = "m_banner";

const BannerModel = db.define(
  TABLE_NAME,
  {
    id_banner: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    // Menambahkan atribut nama banner
    nama_banner: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    
    urutan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    url_gambar: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Menentukan apakah banner aktif/ditampilkan atau tidak
    shown: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, // Default true (tampil) saat dibuat
    },
  },
  {
    tableName: TABLE_NAME,
    timestamps: false,
  }
);

export default BannerModel;