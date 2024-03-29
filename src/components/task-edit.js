import AbstractComponent from "./abstract-component";
import {
  availableTasksColors,
  createElement,
  isEnterKeydown,
  isInputTag,
  Position,
  renderElementIn,
} from "../util";

export default class TaskEdit extends AbstractComponent {
  constructor({description, dueDate, color, repeatingDays, tags, isFavorite, isArchive}) {
    super();

    this._description = description;
    this._dueDate = dueDate;
    this._color = color;
    this._repeatingDays = repeatingDays;
    this._tags = tags;
    this._isFavorite = isFavorite;
    this._isArchive = isArchive;

    this._setDueDateTogglerHandler();
    this._setDayRepeatTogglerHandler();
    this._setColorPickerHandler();
    this._setHashTagsHandler();
  }

  getTemplate() {
    const isCardRepeats = Object.values(this._repeatingDays).some((dayValue) => dayValue);
    return `<article class="card card--edit card--${this._color} ${isCardRepeats ? `card--repeat` : ``}">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--archive ${this._isArchive ? `` : `card__btn--disabled`}">
                      archive
                  </button>
                  <button type="button" class="card__btn card__btn--favorites ${this._isFavorite ? `` : `card__btn--disabled`}">
                      favorites
                  </button>
                </div>
    
                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>
    
                <div class="card__textarea-wrap">
                  <label>
                    <textarea class="card__text" placeholder="Start typing your text here..." name="text"
                    >${this._description}
                    </textarea>
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">yes</span>
                      </button>

                      <fieldset class="card__date-deadline">
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__date"
                            type="text"
                            placeholder=""
                            name="date"
                            value=""
                          />
                        </label>
                      </fieldset>

                      <button class="card__repeat-toggle" type="button">
                        repeat:<span class="card__repeat-status">${isCardRepeats ? `yes` : `no`}</span>
                      </button>

                      <fieldset class="card__repeat-days ${isCardRepeats ? `` : `visually-hidden`}">
                          <div class="card__repeat-days-inner">
                          ${Object.keys(this._repeatingDays).map((day) => `
                          <input
                              class="visually-hidden card__repeat-day-input"
                              type="checkbox"
                              id="repeat-${day}-4"
                              name="repeat"
                              value="${day}"
                              ${this._repeatingDays[day] ? `checked` : ``}
                            />
                            <label class="card__repeat-day" for="repeat-${day}-4"
                              >${day}</label
                            >
                          `).join(``)}
                        </div>
                      </fieldset>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                       ${this._renderHashtags()}
                      </div>

                      <label>
                        <input
                          type="text"
                          class="card__hashtag-input"
                          name="hashtag-input"
                          placeholder="Type new hashtag here"
                        />
                      </label>
                    </div>
                  </div>

                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                    ${availableTasksColors.map((color) => `
                    <input
                        type="radio"
                        id="color-${color}-4"
                        class="card__color-input card__color-input--${color} visually-hidden"
                        name="color"
                        value="${color}"
                        ${this._color === color ? `checked` : ``}
                      />
                      <label
                        for="color-${color}-4"
                        class="card__color card__color--${color}"
                        >black</label
                      >`).join(``)}
                    </div>
                  </div>
                </div>

                <div class="card__status-btns">
                  <button class="card__save" type="submit">save</button>
                  <button class="card__delete" type="button">delete</button>
                </div>
              </div>
            </form>
          </article>`;
  }

  _setDueDateTogglerHandler() {
    this.getElement().querySelector(`.card__date-deadline-toggle`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const dateStatusElement = this.getElement().querySelector(`.card__date-status`);

      if (dateStatusElement.textContent === `yes`) {
        dateStatusElement.textContent = `no`;
        this.getElement().querySelector(`.card__date-deadline`).classList.add(`visually-hidden`);
      } else {
        dateStatusElement.textContent = `yes`;
        this.getElement().querySelector(`.card__date-deadline`).classList.remove(`visually-hidden`);
      }

      this.getElement().querySelector(`input[name='date']`).value = this._dueDate;
    });
  }

  _setDayRepeatTogglerHandler() {
    this.getElement().querySelector(`.card__repeat-toggle`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const repeatStatusElement = this.getElement().querySelector(`.card__repeat-status`);

      if (repeatStatusElement.textContent === `yes`) {
        repeatStatusElement.textContent = `no`;
        this.getElement().classList.remove(`card--repeat`);
        this.getElement().querySelector(`.card__repeat-days`).classList.add(`visually-hidden`);
      } else {
        repeatStatusElement.textContent = `yes`;
        this.getElement().classList.add(`card--repeat`);
        this.getElement().querySelector(`.card__repeat-days`).classList.remove(`visually-hidden`);
      }

      this.getElement().querySelectorAll(`input[name='repeat']`).forEach((dayInput) => {
        dayInput.checked = this._repeatingDays[dayInput.value];
      });
    });
  }

  _setColorPickerHandler() {
    this.getElement().querySelector(`.card__colors-wrap`).addEventListener(`click`, (evt) => {
      if (isInputTag(evt.target.tagName)) {
        evt.preventDefault();
        availableTasksColors.forEach((color) => this._element.classList.remove(`card--${color}`));
        this._element.classList.add(`card--${evt.target.value}`);
      }
    });
  }

  _setHashTagsHandler() {
    this.getElement().querySelector(`input[name='hashtag-input']`).addEventListener(`keydown`, (evt) => {
      if (isEnterKeydown(evt.code)) {
        evt.preventDefault();
        this._tags.add(evt.target.value);
        this._renderHashtag(evt.target.value);
        evt.target.value = ``;
      }
    });

    this.getElement().querySelector(`.card__hashtag-list`).addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`card__hashtag-delete`)) {
        evt.target.closest(`.card__hashtag-inner`).remove();
      }
    });
  }

  _renderHashtags() {
    return Array.from(this._tags).map((tag) => this._getHashtagTemplate(tag)).join(``);
  }

  _renderHashtag(tagValue) {
    renderElementIn(this._element.querySelector(`.card__hashtag-list`), createElement(this._getHashtagTemplate(tagValue)), Position.BEFOREEND);
  }

  _getHashtagTemplate(tag) {
    return `<span class="card__hashtag-inner">
          <input type="hidden" name="hashtag" value="${tag}" class="card__hashtag-hidden-input"/>
          <p class="card__hashtag-name">#${tag}</p>
          <button type="button" class="card__hashtag-delete">delete</button>
      </span>`;
  }
}
