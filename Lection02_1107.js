// 01-30 Завести уточку для работы с людьми

'ducks/people.js'

thunk

// 06 Thunk

Все асинхронности и сайд - эффекты в Реакте должны жить в middleware

Но это не очень

Поэтому и появились "танки".Они позволяют писать асинхронный код
в т н "асинхронных action creators"

Redux Thunk - это десяток строчек кода, в которых ловится 'action',
    смотрят - есть ли для этого экшена фция, и если да - вызывается
эта фция, передавая туда 'getState' & 'dispatch'.

Это прижилось, поскольку в те времена был оч популярен Flux - на нем
была вся работа с сервером

Но потом оказалось, что описывать логику middleware можно и не
в action creator, это можно делать и в редьюсерах - потом в
мидлварах читать и выполнять - если это надо

Таким путем пошел 'redux-loop'.Эт оч интересная идея - поскольку
90 % асинхронной логики - это работа с сетью.Мы должны прочитать
какие - то данные, затем их записать.Где мы лучше всего знаем о
наших данных ? В редьюсерах.

Поэтому логично было бы поместить работу с сетью туда же, где лежит обработка
этих данных

Но потом поняли - что можно не ограничиваться тем, что есть в Redux,
    а напридумывать своих абстракций

Так появились Redux - saga & Redux - Observable

Observable позволяет все писать на базе RxJs, поэтому есть его фанаты(крипто - ангулярцы)

Но в данном комьюнити более популярна Redux - saga - так чта будем учит ее

Саги позволяют писать логику в отдельных сучностях под названием "саги"

Саги работают как генераторы

Генераторы - спец функции - итераторы, которые могур приостанавливать выполнение
при помощи 'yield', и продолжать выполнение при помощи слова 'next'

Т н "промежуточный return"

Генератор - базовая фракция, с которой работает Redux - Saga

// 21

$npm i redux - saga

Саги - это генераторы, которые крутятся в нашей middleware

Хотим задиспатчить какой - то action

Аналог dispatch в saga - 'put':

import { put } from 'redux-saga/effects';
