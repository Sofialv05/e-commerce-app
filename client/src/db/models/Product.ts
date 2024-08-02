import DB from "../connection";

interface Product {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

type SkipStage = { $skip: number };
type LimitStage = { $limit: number };
type MatchStage = { $match: { name: { $regex: string; $options: string } } };

type PipelineStage = SkipStage | LimitStage | MatchStage;

class ProductModel {
  static async findAllProducts(size: number, page: number, search: string) {
    const collection = DB.collection<Product>("Products");

    const skipData = (page - 1) * size;
    // console.log(skipData, "<<<<<<<<<<<<<<<<<<<<<<");
    let pipeline: PipelineStage[] = [
      {
        $skip:
          /**
           * outputFieldN: The first output field.
           * stageN: The first aggregation stage.
           */
          skipData,
      },
      {
        $limit:
          /**
           * Provide the number of documents to limit.
           */
          size,
      },
    ];

    let searchState: {
      $match?: { name: { $regex: string; $options: string } };
    } = {};
    if (search) {
      searchState.$match = { name: { $regex: search, $options: "i" } };
      pipeline.unshift({
        $match: { name: { $regex: search, $options: "i" } },
      });
    }

    const totalData = await collection.countDocuments(searchState.$match || {});
    // console.log(totalData, "<<<<<<<<<<<<");
    const totalPage = Math.ceil(totalData / size);
    const result = await collection.aggregate(pipeline).toArray();
    return { totalData, result, page, totalPage };
  }
  static async findOneProduct(slug: string) {
    const collection = DB.collection<Product>("Products");

    return collection.findOne({ slug });
  }
  // static async insertAll(
  //   datas: {
  //     name: string;
  //     slug: string;
  //     description: string;
  //     excerpt: string;
  //     price: number;
  //     tags: string[];
  //     thumbnail: string;
  //     images: string[];
  //   }[]
  // ) {
  //   const collection = DB.collection<Product>("Products");
  //   for (let data of datas) {
  //     let result = collection.insertOne({
  //       ...data,
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //     });
  //     // console.log(data);
  //   }
  // }
}

export default ProductModel;
