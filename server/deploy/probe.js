// Deployment probe: proves Supabase can load the server's modules from a pinned GitHub version.
import {createEngine} from './hub/engine.js';
import {submitGuard,studentState} from './hub/policy.js';
import { createClient } from 'npm:@supabase/supabase-js@2.95.3';
export function probe(){return {engine:typeof createEngine,policy:typeof submitGuard+'/'+typeof studentState,supabase:typeof createClient};}
