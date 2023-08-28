import { Module } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from './disk.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule],
  providers: [DiskService],
  exports: [DiskService]
})
export class DiskModule {}
