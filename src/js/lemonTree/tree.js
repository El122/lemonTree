const folderIcon = `
	<svg width="16" height="16" viewBox="0 0 468.293 468.293">
		<path style="fill:#F6C358;" d="M29.525,50.447h111.996c7.335,0,14.11,3.918,17.77,10.274l18.433,25.181
			c3.66,6.356,10.436,10.274,17.77,10.274h272.798v287.495c0,15.099-12.241,27.34-27.34,27.34H27.34
			C12.241,411.011,0,398.77,0,383.671V128.068c0-21.133,3.265-42.14,9.68-62.276l0,0C12.03,56.755,20.188,50.447,29.525,50.447z"/>
		<rect x="42.615" y="91.473" style="fill:#EBF0F3;" width="359.961" height="152.058"/>
		<path style="fill:#FCD462;" d="M447.788,64.117H334.927c-8.026,0-15.315,4.683-18.65,11.983l-19.313,42.267
			c-3.336,7.3-10.624,11.983-18.65,11.983H0v260.155c0,15.099,12.241,27.34,27.34,27.34h413.613c15.099,0,27.34-12.241,27.34-27.34
		V84.622C468.293,73.298,459.112,64.117,447.788,64.117z"/>
	</svg>
`;

// Класс для создания дерева проекта
class LemonTree {
  constructor(container, options) {
    this._treeContainer = container;
    this._treeData = options.data;
    this._treeOptions = options;

    this._createLemonTree();

    return this;
  }

  // Создание HTML структуры дерева
  _createLemonTree() {
    const treeContainer = this._treeContainer;
    treeContainer.classList.add("lemon-tree");
    const lemonBody = this._createElement("lemon_body");

    for (let branch of this._treeData) {
      lemonBody.appendChild(this._createBranch(branch));
    }

    treeContainer.appendChild(lemonBody);
  }

  _setItemOptions(item, branch) {
    item.setAttribute("data-lemon-id", branch.lemonId);
    item.setAttribute("id", branch.id);

    if (branch.class) for (let classItem of branch.class) item.classList.add(classItem);
  }

  // Создание ветки дерева
  _createBranch(branch) {
    const lemonItem = this._createElement("lemon_item");
    const lemonItemItems = this._createElement("lemon_item-items");
    const lemonItemTitle = this._createBranchTitle(branch);

    this._setItemOptions(lemonItem, branch);

    if (branch.children) {
      lemonItemTitle.classList.add("lemon_item-items-full");
      lemonItemTitle.onclick = this.openSub;

      if (this._treeOptions.closed) {
        lemonItemTitle.classList.add("__closed");
        lemonItemItems.style.display = "none";
      }

      for (let branchChildren of branch.children) {
        lemonItemItems.appendChild(this._createBranch(branchChildren));
      }
    } else lemonItemTitle.classList.add("lemon_item-items-empty");

    lemonItem.appendChild(lemonItemTitle);
    lemonItem.appendChild(lemonItemItems);

    return lemonItem;
  }

  _createBranchTitle(branch) {
    const lemonItemTitle = this._createElement("lemon_item-title");
    const lemonTiltleIcon = document.createElement("div");
    const lemonTiltleText = document.createElement("span");
    lemonTiltleIcon.innerHTML = folderIcon;
    lemonTiltleText.innerText = branch.name;

    lemonItemTitle.appendChild(lemonTiltleIcon);
    lemonItemTitle.appendChild(lemonTiltleText);

    return lemonItemTitle;
  }

  openSub(e) {
    const _findElem = (elem, selector) => {
      return (
        elem.parentNode.querySelector(selector) ||
        _findElem(elem.parentNode, selector)
      );
    }

    const itemItems = _findElem(e.target, ".lemon_item-items");
    let itemTitle = _findElem(e.target, ".lemon_item-title");

    if (itemItems.style.display == "block") {
      itemItems.style.display = "none";
      itemTitle.classList.add("__closed");
    } else {
      itemItems.style.display = "block";
      itemTitle.classList.remove("__closed");
    }
  }

  _createElement(elemClass) {
    const block = document.createElement("div");
    block.classList.add(elemClass);

    return block;
  }
}