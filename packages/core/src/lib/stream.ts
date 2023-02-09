import {
  Subject,
  Observer as RxObserver,
  Subscription,
  filter,
  map,
} from 'rxjs';

export interface Event<T> {
  type: symbol;
  payload: T;
}

export type Observer<T> = Partial<RxObserver<T>> | ((payload: T) => void);

export class Stream {
  private readonly _stream$: Subject<Event<unknown>> = new Subject<
    Event<unknown>
  >();

  public publish<T>(type: symbol, payload: T) {
    this._stream$.next({ type, payload });
  }

  public subscribe<T>(type: symbol, observer: Observer<T>): Subscription {
    return this._stream$
      .pipe(
        filter((event: Event<unknown>) => event.type == type),
        map<Event<unknown>, T>((event: Event<unknown>) => event.payload as T)
      )
      .subscribe(observer);
  }
}
