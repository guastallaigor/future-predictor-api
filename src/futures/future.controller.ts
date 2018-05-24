import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateFutureDto } from './create-future.dto';
import { FutureService } from './future.service';
import { Future } from './future.interface';

@Controller('future')
export class FutureController {

  constructor(private readonly futureService: FutureService) { }

  @Get()
  async findAll(): Promise<Future[]> {
    return this.futureService.findAll();
  }

  @Post()
  async create( @Body() createFutureDto: CreateFutureDto) {
    const percentage: number = Math.floor(Math.random() * (100));
    const selectPossibility: number = Math.floor(Math.random() * (100));
    const number: number = Math.floor(Math.random() * (99999));
    const days: number = Math.floor(Math.random() * (3));
    const dayMonthYear: Array<string> = ['days', 'months', 'years'];
    const name: string = createFutureDto.name;
    let literal: string = dayMonthYear[days].replace('s', '');

    if (days <= 1) {
      literal = dayMonthYear[days];
    }

    const possibilities: Array<string> = [
      'be rich',
      'be poor',
      'be dead',
      'be happy',
      'be sad',
      'be angry',
      'be in fear',
      'feel joy',
      'be fired',
      'have a girlfriend',
      'have a boyfriend',
      'buy a house',
      'buy a dog',
      'buy a fish',
      'buy a spaceship',
      'buy a car',
      'buy a bus',
      'be hired',
      'get a raise',
      'travel',
      'get a new job',
      'learn javascript',
      'learn react',
      'learn vuejs',
      'learn angularjs',
      'learn php',
      'learn java',
      'learn C',
      'learn C#',
      'learn C++',
      'learn Python',
      'learn Ruby',
      'learn Laravel',
      'learn Nuxtjs',
      'learn Nodejs',
      'learn MongoDB',
      'learn Oracle',
      'learn PostgreSQL',
      'learn MySQL',
      'learn Java',
      'learn Kotlin',
      'learn MySQL Server',
      'drink vodka',
      'drink some beers',
      'go out with your friends',
      'make a new friend',
      'fight',
      'punch someone',
      'play Dota 2',
      'play League of Legends',
      'play Minecraft',
      'play Tibia',
      'play Terraria',
      'buy an Iphone',
      'make an app',
      'learn a new instrument',
      'learn a new instrument',
      'watch a new movie',
      'watch a new TV show',
      'watch a new anime',
      'listen to Justin Bieber',
      'listen to Simple Plan',
      'listen to SOJA',
      'listen to Russian music',
      'listen to K-Pop music',
      'listen to J-Pop music',
      'listen to MPB music',
      'listen to EMO music',
      'listen to Game music',
      'listen to ACDC',
      'break up with someone',
      'break up with someone',
      'start a new company',
      'quit your job',
      'bake a cake',
      'drink wine',
      'play fortnite',
      'play PUBG',
      'dance',
      'format your computer and install MacOS',
      'format your computer and install Windows',
      'sleep for 12 hours in a row',
      'sleep for 10 hours in a row',
      'sleep for 8 hours in a row',
      'get sick',
      'fall',
      'hit your head',
      'break something',
      'buy new clothes',
      'buy a new cap',
      'go to the gym',
      'play some sport',
      'paint',
      'draw',
      'take a new photo of yourself',
      'kiss someone',
      'make love with someone',
      'be crazy for 1 day',
      'have a Monster Energy',
      'lie to a close friend',
      'make a funny joke',
    ]

    const description: string = 'You will ' + possibilities[selectPossibility] +
      ' in ' + number + ' ' + literal + ' !';
    const id: string = uuid();
    const newFuture = Object.assign({}, createFutureDto, {
      id,
      result: possibilities[selectPossibility],
      description,
      percentage,
      name
    });

    return this.futureService.create(newFuture);
  }

  @Delete(':futureId')
  delete( @Param('futureId') futureId) {
    return this.futureService.deleteOne(futureId);
  }

  @Get(':futureId')
  findOne(@Param('futureId') futureId) {
    return this.futureService.findOne(futureId);
  }
}
