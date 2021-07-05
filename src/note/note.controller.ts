import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  getNotes(): string[] {
    return this.noteService.getNotes();
  }

  @Post()
  writeNote(@Body() writeData) {
    return this.noteService.writeNote(writeData);
  }

  @Put()
  editNote(@Body() editData) {
    return this.noteService.editNote(editData);
  }

  @Delete()
  delNote(@Body() seqId) {
    return this.noteService.delNote(seqId);
  }
}
