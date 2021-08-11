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

    this._createLemonTree();
  }

  // Создание HTML структуры дерева
  _createLemonTree() {
    console.log("Creating LemonTree...");
    this._treeContainer.classList.add("lemon-tree");
    const lemonBody = document.createElement("div");
    lemonBody.classList.add("lemon_body");
    for (let branch of this._treeData) {
      lemonBody.appendChild(this._createBranch(branch));
    }
    this._treeContainer.appendChild(lemonBody);
  }

  // Создание ветки дерева
  _createBranch(branch) {
    console.log("Рекурсивные страдания");
    const lemonItem = document.createElement("div");
    lemonItem.classList.add("lemon_item");
    lemonItem.setAttribute("data-lemon-id", branch.id);
    const lemonItemTitle = this._createBranchTitle(branch);
    const lemonItemItems = document.createElement("div");

    if (branch.children) {
      lemonItemItems.classList.add("lemon_item-items");
      lemonItemTitle.classList.add("lemon_item-items-full");
      lemonItemTitle.onclick = this.openSub;
      for (let branchChildren of branch.children) {
        lemonItemItems.appendChild(this._createBranch(branchChildren));
      }
    } else lemonItemTitle.classList.add("lemon_item-items-empty");

    lemonItem.appendChild(lemonItemTitle);
    lemonItem.appendChild(lemonItemItems);

    return lemonItem;
  }

  _createBranchTitle(branch) {
    const lemonItemTitle = document.createElement("div");
    const lemonTiltleIcon = document.createElement("div");
    const lemonTiltleText = document.createElement("span");
    lemonTiltleIcon.innerHTML = folderIcon;
    lemonItemTitle.classList.add("lemon_item-title");
    lemonTiltleText.innerText = branch.name;
    
    lemonItemTitle.appendChild(lemonTiltleIcon);
    lemonItemTitle.appendChild(lemonTiltleText);

    return lemonItemTitle;
  }

  openSub(e) {
    const itemItems =
      e.target.parentNode.querySelector(".lemon_item-items") ||
      e.target.parentNode.parentNode.querySelector(".lemon_item-items");
    let itemItemsVisible = itemItems.style.display || "block";
    let itemTitle =
      e.target.parentNode.querySelector(".lemon_item-title") ||
      e.target.parentNode.parentNode.querySelector(".lemon_item-title");
    
    if (itemItemsVisible == "block") {
      itemItems.style.display = "none";
      itemTitle.classList.add("__closed");
    }
    else {
      itemItems.style.display = "block";
      itemTitle.classList.remove("__closed");
    }
  }
}