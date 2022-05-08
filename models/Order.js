import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    customer: {
      type: string,
      required: true,
      maxlength: 60,
    },
    address: {
      type: string,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// mongo database에 Product 모델이 있을 경우는 새로 만들지 않고 기존의 모델 사용하겠다
export default mongoose.models.Prodct ||
  mongoose.model('Product', ProductSchema);
