import { Category } from "./entity/Category";
import { getTreeRepository, getManager } from "typeorm";

export const createCategory = async () => {
  const manager = getManager();

  const first = new Category();
  first.name = "first";
  await manager.save(first);

  const second = new Category();
  second.name = "second";
  second.parent = first;
  await manager.save(second);

  const third = new Category();
  third.name = "third";
  third.parent = first;
  await manager.save(third);

  const fourth = new Category();
  fourth.name = "fourth";
  fourth.parent = second;
  await manager.save(fourth);

  const fifth = new Category();
  fifth.name = "fifth";
  fifth.parent = second;
  await manager.save(fifth);

  await manager
    .getTreeRepository(Category)
    .findTrees()
    .then((d) => {
      console.log(JSON.stringify(d));
    });
};
