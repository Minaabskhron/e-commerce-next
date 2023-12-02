interface Iproduct {
  price: number;
  imageCover: string;
  title: string;
  subcategory: [
    {
      name: string;
    }
  ];
  ratingsAverage: number;
}
